/**
 * Área de configuração das tags de marketing.
 * Preencha apenas os IDs recebidos nas plataformas; deixe vazio para desativar.
 * Google tag: G-... (Analytics) ou AW-... (Ads)
 * Google Tag Manager: GTM-...
 * Pixel da Meta: identificador numérico do pixel
 * Para hospedagem estática, gere uma nova cópia do site após preencher os IDs.
 */
export const trackingIds = {
  googleTag: "AW-18120788276",
  googleTagManager: "",
  metaPixel: "",
};

export const googleTagId = /^(G-[A-Z0-9]+|AW-[0-9]+)$/.test(trackingIds.googleTag)
  ? trackingIds.googleTag
  : "";
export const googleTagManagerId = /^GTM-[A-Z0-9]+$/.test(trackingIds.googleTagManager)
  ? trackingIds.googleTagManager
  : "";
export const metaPixelId = /^[0-9]+$/.test(trackingIds.metaPixel)
  ? trackingIds.metaPixel
  : "";