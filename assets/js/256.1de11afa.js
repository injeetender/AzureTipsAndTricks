(window.webpackJsonp=window.webpackJsonp||[]).push([[256],{536:function(t,e,a){"use strict";a.r(e);var s=a(43),n=Object(s.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("💡 Learn more : "),a("a",{attrs:{href:"https://docs.microsoft.com/azure/storage/common/storage-account-overview?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("Azure storage account overview"),a("OutboundLink")],1),t._v(".")])]),t._v(" "),a("h4",{attrs:{id:"shared-access-tokens-with-azure-storage-blob-containers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#shared-access-tokens-with-azure-storage-blob-containers","aria-hidden":"true"}},[t._v("#")]),t._v(" Shared Access Tokens with Azure Storage Blob Containers")]),t._v(" "),a("p",[t._v("In case you are new to the Azure Storage Tables, we've reviewed the following items so far:")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip82.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Creating your first Azure Storage Table"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip83.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Adding an item to a Azure Storage Table"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip84.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Reading an item from a Azure Storage Table"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip85.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Updating an item from a Azure Storage Table"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip86.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Deleting an item from a Azure Storage Table"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip86.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ensure a clean RowKey in Azure Storage Table"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip88.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("What's the purpose of ETag in Azure Storage Table?"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip89.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Shared Access Tokens with Azure Storage Blob Containers"),a("OutboundLink")],1)])]),t._v(" "),a("h4",{attrs:{id:"what-is-it"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-is-it","aria-hidden":"true"}},[t._v("#")]),t._v(" What is it?")]),t._v(" "),a("p",[t._v("A shared access signature (or you may hear SAS) provides delegated access to resources in your storage account. With a SAS, you can grant  access to resources in your storage account, without sharing your master account keys. In other words, a SAS is a secure way to share your storage resources without compromising your account keys.")]),t._v(" "),a("h4",{attrs:{id:"a-practical-example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#a-practical-example","aria-hidden":"true"}},[t._v("#")]),t._v(" A Practical Example")]),t._v(" "),a("p",[t._v("Let's say that I have a image that is stored in an Azure Storage Blob Container with the endpoint of "),a("a",{attrs:{href:"https://mbcrumpsa.blob.core.windows.net/images/mikepic.png",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://mbcrumpsa.blob.core.windows.net/images/mikepic.png"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[t._v("I can store this file, one of three ways:")]),t._v(" "),a("ul",[a("li",[t._v("No public read access: The container and its blobs can be accessed only by the storage account owner. This is the default for all new containers.")]),t._v(" "),a("li",[t._v("Public read access for blobs only: Blobs within the container can be read by anonymous request, but container data is not available. Anonymous clients cannot enumerate the blobs within the container.")]),t._v(" "),a("li",[t._v("Full public read access: All container and blob data can be read by anonymous request. Clients can enumerate blobs within the container by anonymous request, but cannot enumerate containers within the storage account.")])]),t._v(" "),a("p",[t._v("The second and third option would give full access to the image and it would display with no problem. But if you select "),a("strong",[t._v("No public read access")]),t._v(" as shown below, then the image will not display b/c you don't have permissions.")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/files/azuresas1.jpg")}}),t._v(" "),a("p",[t._v("Matter of fact, if you try to access the image by going to the URL, then you'll see the following:")]),t._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("This XML file does not appear to have any style information associated with it. The document tree is shown below.\n<Error>\n<Code>ResourceNotFound</Code>\n<Message>\nThe specified resource does not exist. RequestId:7dd786ac-001e-0057-3c0a-9bd1e4000000 Time:2018-02-01T03:10:39.7635624Z\n</Message>\n</Error>\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("p",[t._v("This is where we'd typically want to generate a SAS token and serve it up in an application. You can do this very easily by opening the Azure Portal and navigate to your Azure Storage Account and select Blob Service. Then click on "),a("strong",[t._v("Access Policy")]),t._v(" and give it a name, permissions and a start and end date and make sure you save it.")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/files/azuresas2.jpg")}}),t._v(" "),a("p",[t._v("I named mine "),a("strong",[t._v("imageSAP")]),t._v(". Now we could simple access this through code with a call to "),a("strong",[t._v("GetSharedAccessSignature")]),t._v(" as shown below:")]),t._v(" "),a("div",{staticClass:"language-csharp line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CloudStorageAccount")]),t._v(" storageAccount "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" CloudStorageAccount"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Parse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    CloudConfigurationManager"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetSetting")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"StorageConnection"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CloudBlobClient")]),t._v(" blobClient "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" storageAccount"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("CreateCloudBlobClient")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CloudBlobContainer")]),t._v(" container "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" blobClient"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetContainerReference")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"images"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" blobs "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token generic-method"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("List")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TweetEntity")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("foreach")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" blob "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" container"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ListBlobs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("blob"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetType")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("CloudBlockBlob"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" sas "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" container"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetSharedAccessSignature")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"imageSAP"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// sas now contains the signature that we could append to a URL. ")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br")])]),a("p",[t._v("As stated in the code, we now have access to the token from our "),a("strong",[t._v("imageSAP")]),t._v(" policy that will generate our signature that gives us access to the image for the specified time. We could then see the image once we go to the site.")])])},[],!1,null,null,null);e.default=n.exports}}]);