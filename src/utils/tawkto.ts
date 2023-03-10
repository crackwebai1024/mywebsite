declare global {
  interface Window {
    Tawk_API: any;
  }
}

const AddChat = () => {
  const tawkToScript = document.getElementById("tawkToScript");
  if (tawkToScript) {
    // Prevent TawkTo to create root script if it already exists
    return window.Tawk_API;
  }
  // See https://www.tawk.to/knowledgebase/getting-started/adding-a-widget-to-your-website/ for widget creation
  const s1 = document.createElement("script");
  s1.id = "tawkToScript";
  s1.async = true;
  s1.src = "https://embed.tawk.to/609a1f82185beb22b30c1484/1f5d0m6pc";
  s1.setAttribute("crossorigin", "*");
  const s0 = document.getElementsByTagName("script")[0];
  if (!s0 || !s0.parentNode) {
    throw new Error("DOM is missing");
  }
  s0.parentNode.insertBefore(s1, s0);

  document.body.appendChild(s0);
  document.body.appendChild(s1);

  window.Tawk_API = window.Tawk_API || {};
  window.Tawk_API.onLoad = function () {
    document.querySelectorAll("iframe")[2].style.bottom = "55px";
  };
};

export default AddChat;
