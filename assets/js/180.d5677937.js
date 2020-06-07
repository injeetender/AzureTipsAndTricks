(window.webpackJsonp=window.webpackJsonp||[]).push([[180],{459:function(e,t,r){"use strict";r.r(t);var a=r(43),i=Object(a.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("div",{staticClass:"tip custom-block"},[r("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),r("p",[e._v("🔥  Hold the date. April 9th is the "),r("a",{attrs:{href:"https://captcalli.github.io/LiveCodersConf/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Live Coders Conference!"),r("OutboundLink")],1),e._v(". The Live Coders, an outgoing and enthusiastic group of friendly channels that write code, teach about technology, and promote the technical community.")]),e._v(" "),r("p",[e._v("💡 Learn more : "),r("a",{attrs:{href:"https://docs.microsoft.com/azure/app-service/configure-ssl-certificate?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Add an SSL certificate in Azure App Service"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("p",[e._v("📺 Watch the video : "),r("a",{attrs:{href:"https://www.youtube.com/watch?v=qPphhM2v3xU&list=PLLasX02E8BPCNCK8Thcxu-Y-XcBUbhFWC&index=4&t=0s?WT.mc_id=youtube-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("How to use Azure App Service managed certificates"),r("OutboundLink")],1),e._v(".")])]),e._v(" "),r("h3",{attrs:{id:"how-to-use-azure-app-service-managed-certificates"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#how-to-use-azure-app-service-managed-certificates","aria-hidden":"true"}},[e._v("#")]),e._v(" How to use Azure App Service managed certificates")]),e._v(" "),r("h4",{attrs:{id:"securing-your-app-services"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#securing-your-app-services","aria-hidden":"true"}},[e._v("#")]),e._v(" Securing your App Services")]),e._v(" "),r("p",[e._v("As you know, it is important to secure your applications. One of the security measures that you need to take is to protect traffic to and from your web application. You can do that by encrypting traffic with SSL certificates, so that traffic will always go through the HTTPS protocol.")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://docs.microsoft.com/azure/app-service/?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure App Service"),r("OutboundLink")],1),e._v(" makes it very easy to protect your application that has a custom domain, with SSL certificates. You can bring your own certificate, buy an "),r("a",{attrs:{href:"https://docs.microsoft.com/azure/app-service/configure-ssl-certificate#import-an-app-service-certificate?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("App Service Certificate"),r("OutboundLink")],1),e._v(" and now you can use a "),r("strong",[e._v("free")]),e._v(" "),r("a",{attrs:{href:"https://docs.microsoft.com/azure/app-service/configure-ssl-certificate#create-a-free-certificate-preview?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("App Service Managed Certificate"),r("OutboundLink")],1),e._v(". Each of these can be used for different requirements as you can see in the table below:")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("Requirement")]),e._v(" "),r("th",{staticStyle:{"text-align":"center"}},[e._v("App Service Certificate")]),e._v(" "),r("th",{staticStyle:{"text-align":"center"}},[e._v("App Service Managed Certificate")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("Protect www domain (i.e. https://www.microsoft.com)")]),e._v(" "),r("td",{staticStyle:{"text-align":"center"}},[e._v("X")]),e._v(" "),r("td",{staticStyle:{"text-align":"center"}},[e._v("X")])]),e._v(" "),r("tr",[r("td",[e._v("Protect naked domain (i.e. https://microsoft.com)")]),e._v(" "),r("td",{staticStyle:{"text-align":"center"}},[e._v("X")]),e._v(" "),r("td",{staticStyle:{"text-align":"center"}})]),e._v(" "),r("tr",[r("td",[e._v("Protect wildcard domain (i.e. https://azure.microsoft.com)")]),e._v(" "),r("td",{staticStyle:{"text-align":"center"}},[e._v("X")]),e._v(" "),r("td",{staticStyle:{"text-align":"center"}})]),e._v(" "),r("tr",[r("td",[e._v("Certificate is exportable")]),e._v(" "),r("td",{staticStyle:{"text-align":"center"}},[e._v("X")]),e._v(" "),r("td",{staticStyle:{"text-align":"center"}})]),e._v(" "),r("tr",[r("td",[e._v("Certificate Issuer")]),e._v(" "),r("td",{staticStyle:{"text-align":"center"}},[e._v("GoDaddy")]),e._v(" "),r("td",{staticStyle:{"text-align":"center"}},[e._v("DigiCert")])]),e._v(" "),r("tr",[r("td",[e._v("Costs")]),e._v(" "),r("td",{staticStyle:{"text-align":"center"}},[e._v("$69,99 (standard) - $299,99 (wildcard) / year")]),e._v(" "),r("td",{staticStyle:{"text-align":"center"}},[e._v("Free")])])])]),e._v(" "),r("p",[e._v("In this post, we'll protect an "),r("a",{attrs:{href:"https://azure.microsoft.com/services/app-service/web/?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("App Service Web App"),r("OutboundLink")],1),e._v(" with a free App Service Managed Certificate.")]),e._v(" "),r("h4",{attrs:{id:"prerequisites"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites","aria-hidden":"true"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),r("p",[e._v("If you want to follow along, you'll need the following:")]),e._v(" "),r("ul",[r("li",[e._v("An Azure subscription (If you don't have an Azure subscription, create a "),r("a",{attrs:{href:"https://azure.microsoft.com/free/?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("free account"),r("OutboundLink")],1),e._v(" before you begin)")]),e._v(" "),r("li",[e._v("An existing Azure App Service Web App with a valid custom domain coupled to it")])]),e._v(" "),r("h4",{attrs:{id:"protect-an-app-service-web-app-with-an-app-service-managed-certificate"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#protect-an-app-service-web-app-with-an-app-service-managed-certificate","aria-hidden":"true"}},[e._v("#")]),e._v(" Protect an App Service Web App with an App Service Managed Certificate")]),e._v(" "),r("p",[e._v("Standard Azure domains (yourwebsite.azurewebsites.net) are already SSL protected by default, but custom domains aren't. So let's use an App Service Managed Certificate to protect a Web App with a custom domain.\nI start out with a website that runs in an Azure Web App under a custom domain and doesn't have any SSL bindings configured. When I navigate to this website, my browser warns me that my connection isn't private. Let's fix that.")]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/50sslerror.png")}}),e._v(" "),r("p",[e._v("(Website without SSL)")]),e._v(" "),r("ol",[r("li",[e._v("Go to the "),r("a",{attrs:{href:"https://portal.azure.com/?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure portal"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("Open your Web App that has a valid custom domain coupled to it")]),e._v(" "),r("li",[e._v("In order to use custom domains and protect them in Azure App Service, your App Service need to run in the "),r("strong",[e._v("B1 service tier")]),e._v(" or higher. You can check if this is the case by taking a look at your settings in the "),r("strong",[e._v("Scale up (App Service Plan) menu")]),e._v(" in the Web App")]),e._v(" "),r("li",[e._v("Go to the "),r("strong",[e._v("TLS/SSL settings menu")]),e._v(" in the Web App. Here, you can see that there are no SSL bindings for the custom domain yet")])]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/50tslsettings.png")}}),e._v(" "),r("p",[e._v("(TSL/SSL settings menu in a Web App in the Azure portal)")]),e._v(" "),r("ol",{attrs:{start:"5"}},[r("li",[e._v("Click on the "),r("strong",[e._v("Private Key Certificates (.pfx)")]),e._v(" button. This opens the Private Key Certificate blade")])]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/50privatekeysettings.png")}}),e._v(" "),r("p",[e._v("(Private Key Certificate settings in the Azure portal)")]),e._v(" "),r("ol",{attrs:{start:"6"}},[r("li",[e._v("In the Private Key Certificate blade, there are no certificates yet, so let's create one. Click on "),r("strong",[e._v("Create App Service Managed Certificate")]),e._v(" to start creating one")]),e._v(" "),r("li",[e._v("Select the custom domain name to create the App Service Managed Certificate for and click "),r("strong",[e._v("Create")]),e._v(" to create it. Remember that you can only use managed certificates for www domains, not naked domains")])]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/50createmanagedcerts.png")}}),e._v(" "),r("p",[e._v("(Create App Service Managed Certificate in the Azure portal)")]),e._v(" "),r("ol",{attrs:{start:"8"}},[r("li",[e._v("When the certificate is created, go back to the Bindings blade. Here, you need to create a binding between your domain and the certificate. Click the "),r("strong",[e._v("Add TLS/SSL Binding")]),e._v(" button in the bottom of the blade\na. Select the "),r("strong",[e._v("Custom domain")]),e._v(" to create the binding for\nb. And select the "),r("strong",[e._v("Certificate")]),e._v(" that you've just created\nc. Also select the "),r("strong",[e._v("TLS/SSL type")]),e._v(". In this case, only SNI SSL will be available\nd. Click "),r("strong",[e._v("Add Binding")]),e._v(" to add the binding")])]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/50addbinding.png")}}),e._v(" "),r("p",[e._v("(Add TLS/SSL binding in the Azure portal)")]),e._v(" "),r("p",[e._v("That's it! Now, when you navigate to the website, the warning will no longer be visible. Instead, you'll see a green lock next to the URL. And when you click on it, you can see that the connection is secure and that the certificate is valid.")]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/50secureconnection.png")}}),e._v(" "),r("p",[e._v("(Website with SSL)")]),e._v(" "),r("h4",{attrs:{id:"conclusion"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#conclusion","aria-hidden":"true"}},[e._v("#")]),e._v(" Conclusion")]),e._v(" "),r("p",[e._v("Azure App Service Managed Certificates provide a great way to implement basic security for your application. It is free and once you've generated a certificate, it will renew itself, so you don't have to think about it. Read more about it "),r("a",{attrs:{href:"https://docs.microsoft.com/azure/app-service/configure-ssl-certificate#create-a-free-certificate-preview?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),r("OutboundLink")],1),e._v(" and check it out!")])])},[],!1,null,null,null);t.default=i.exports}}]);