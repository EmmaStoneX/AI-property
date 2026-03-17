// 内嵌默认站点数据，作为 KV 为空时的兜底
const DEFAULT_SITES = [
  { domain: 'ai.zxvmax.com', name: '镜像站统一入口', desc: 'Claude 和 Grok 镜像站统一入口，支持多种登录方式', url: 'https://ai.zxvmax.com', accessible: true, tags: ['模型镜像', '开箱即用', 'Serverless'] },
  { domain: 'api.zxvmax.com', name: 'LLM 中转站', desc: '支持国内外主流大语言模型的 API 中转服务', url: 'https://api.zxvmax.com', accessible: true, tags: ['API 服务', '开箱即用', 'Docker', '后端服务'] },
  { domain: 'chat.zxvmax.com', name: '口袋助手', desc: '主聊天工具，支持多模型对话和图像上传', url: 'https://chat.zxvmax.com', accessible: true, tags: ['聊天助手', 'BYOK', 'Serverless'] },
  { domain: 'deep-research.zxvmax.com', name: '深度研究', desc: 'AI 驱动的深度研究与分析工具', url: 'https://deep-research.zxvmax.com', accessible: true, tags: ['研究工具', 'BYOK', 'Serverless'] },
  { domain: 'dify.zxvmax.com', name: 'Dify 平台', desc: 'Dify 私有化部署，AI 应用开发平台', url: 'https://dify.zxvmax.com', accessible: true, tags: ['AI 平台', '开箱即用', 'Docker'] },
  { domain: 'img.zxvmax.com', name: 'AI 生图', desc: 'AI 图像生成工具，对接大香蕉2模型', url: 'https://img.zxvmax.com', accessible: true, tags: ['创意工具', '开箱即用', 'Serverless'] },
  { domain: 'nano-kit.zxvmax.com', name: 'Nano Kit', desc: 'AI 绘图工作台，绘图工具套件', url: 'https://nano-kit.zxvmax.com', accessible: true, tags: ['创意工具', '开箱即用', 'Serverless'] },
  { domain: 'netpulse.zxvmax.com', name: 'NetPulse', desc: 'AI 互联网事件实时分析器（开源项目）', url: 'https://netpulse.zxvmax.com', accessible: true, tags: ['研究工具', '开箱即用', 'Serverless'] },
  { domain: 'ui-prompt.zxvmax.com', name: 'UI Style Prompt', desc: 'AI UI 设计风格提示词库', url: 'https://ui-prompt.zxvmax.com', accessible: true, tags: ['开发工具', '开箱即用', 'Serverless'] },
  { domain: 'waoo.zxvmax.com', name: 'Waoo Studio', desc: 'AI 影视/动漫制作平台，支持注册使用', url: 'https://waoo.zxvmax.com', accessible: true, tags: ['创意工具', 'BYOK', 'Docker'] },
  { domain: 'backend-ai.zxvmax.com', name: 'AI 后端', desc: 'Claude 镜像站后端服务', url: null, accessible: false, tags: ['API 服务', '后端服务', 'Serverless'] },
  { domain: 'claude.zxvmax.com', name: 'Claude 镜像', desc: 'Claude 镜像站主站，从 AI 入口跳转', url: null, accessible: false, tags: ['模型镜像', '后端服务', 'Docker'] },
  { domain: 'grok.zxvmax.com', name: 'Grok 镜像', desc: 'Grok 镜像站主站，从 AI 入口跳转', url: null, accessible: false, tags: ['模型镜像', '后端服务', 'Docker'] },
  { domain: 'grok2api.zxvmax.com', name: 'Grok2API', desc: 'Grok 模型 API 代理服务', url: 'https://grok.zxvmax.com/lyy0709', accessible: true, tags: ['API 服务', '后端服务', 'Serverless'] },
  { domain: 'kagi2api.zxvmax.com', name: 'Kagi2API', desc: 'Kagi 搜索 API 代理服务', url: null, accessible: false, tags: ['API 服务', '后端服务', 'Serverless'] },
  { domain: 'cpa.zxvmax.com', name: 'CLI Proxy', desc: 'CLI 代理，中转 GPT 模型', url: 'https://cpa.zxvmax.site/management.html', accessible: true, tags: ['API 服务', '后端服务', 'Docker'] },
  { domain: 'spark.us.ci', name: 'Spark Mail', desc: '临时邮箱服务', url: 'https://spark.us.ci', accessible: true, tags: ['工具', '开箱即用', 'Serverless'] },
];

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

function json(data, status = 200) {
  return Response.json(data, { status, headers: CORS });
}

async function getSites(env) {
  const raw = await env.SITES_KV.get('sites');
  return raw ? JSON.parse(raw) : DEFAULT_SITES;
}

async function saveSites(env, sites) {
  await env.SITES_KV.put('sites', JSON.stringify(sites));
}

function checkPassword(env, password) {
  return password === env.ADMIN_PASSWORD;
}

export async function onRequest(context) {
  const { request, env } = context;
  const method = request.method;

  // 预检请求
  if (method === 'OPTIONS') {
    return new Response(null, { headers: CORS });
  }

  // GET：读取站点列表
  if (method === 'GET') {
    const sites = await getSites(env);
    return json(sites);
  }

  // POST：新增站点
  if (method === 'POST') {
    let body;
    try {
      body = await request.json();
    } catch {
      return json({ error: '无效 JSON' }, 400);
    }

    const { password, site } = body;

    if (!checkPassword(env, password)) {
      return json({ error: '密码错误' }, 401);
    }

    if (!site || !site.domain || !site.name) {
      return json({ error: '缺少必填字段：domain、name' }, 400);
    }

    const sites = await getSites(env);

    // 不允许重复 domain
    if (sites.some(s => s.domain === site.domain)) {
      return json({ error: `域名 ${site.domain} 已存在` }, 409);
    }

    sites.push({
      domain: site.domain,
      name: site.name,
      desc: site.desc || '',
      url: site.url || null,
      accessible: Boolean(site.accessible),
      tags: Array.isArray(site.tags) ? site.tags : [],
    });

    await saveSites(env, sites);
    return json({ ok: true });
  }

  // DELETE：删除站点（domain=__verify__ 仅做密码验证）
  if (method === 'DELETE') {
    let body;
    try {
      body = await request.json();
    } catch {
      return json({ error: '无效 JSON' }, 400);
    }

    const { password, domain } = body;

    if (!checkPassword(env, password)) {
      return json({ error: '密码错误' }, 401);
    }

    // 仅验证密码，不修改数据
    if (domain === '__verify__') {
      return json({ ok: true });
    }

    const sites = await getSites(env);
    const filtered = sites.filter(s => s.domain !== domain);
    await saveSites(env, filtered);
    return json({ ok: true });
  }

  return new Response('Method Not Allowed', { status: 405, headers: CORS });
}
