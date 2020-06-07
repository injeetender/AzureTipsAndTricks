(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{547:function(t,a,s){"use strict";s.r(a);var e=s(43),n=Object(e.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("💡 Learn more : "),s("a",{attrs:{href:"https://docs.microsoft.com/azure/automation/automation-intro?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("An introduction to Azure Automation"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("p",[t._v("📺 Watch the video : "),s("a",{attrs:{href:"https://www.youtube.com/watch?v=pQ9dQ13B2vM&list=PLLasX02E8BPCNCK8Thcxu-Y-XcBUbhFWC&index=50?WT.mc_id=youtube-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("How to use Azure Automation with PowerShell"),s("OutboundLink")],1),t._v(".")])]),t._v(" "),s("h4",{attrs:{id:"azure-automation-with-windows-machine-with-powershell"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#azure-automation-with-windows-machine-with-powershell","aria-hidden":"true"}},[t._v("#")]),t._v(" Azure Automation with Windows Machine with PowerShell")]),t._v(" "),s("p",[t._v("As a developer, when I do something more than once, I want to automate it. "),s("a",{attrs:{href:"https://docs.microsoft.com/azure/automation/automation-intro?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("Azure Automation"),s("OutboundLink")],1),t._v(" makes this very easy for most common IT tasks, like scaling Azure SQL DBs up and down and starting and stopping VMs on a schedule.")]),t._v(" "),s("p",[t._v("Azure Automation is a very mature service in Azure that let's you do anything that you can think of in Azure and also on-premises in hybrid scenarios.\nBasically, Azure Automation is serverless. You don't have to worry about how it runs and works, you just tell it what to do and use it. And you only "),s("a",{attrs:{href:"https://azure.microsoft.com/pricing/details/automation?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("pay for it"),s("OutboundLink")],1),t._v(" when it does something.")]),t._v(" "),s("p",[t._v("Azure Automation provides lots of features out-of-the-box, which range from tracking changes in the configuration of VMs, to managing VM Operating System updates to starting and stopping VMs on a schedule.")]),t._v(" "),s("img",{attrs:{src:t.$withBase("/files/AutomationFeatures.png")}}),t._v(" "),s("p",[t._v("(Azure Automation features in the Azure portal menu)")]),t._v(" "),s("p",[t._v("You can also customize the job that you want Azure Automation to do for you. To do that, you can create a "),s("strong",[t._v("Runbook")]),t._v(". You can create one from scratch or pick one from the "),s("a",{attrs:{href:"https://gallery.technet.microsoft.com/scriptcenter/site/search?f%5B0%5D.Type=RootCategory&f%5B0%5D.Value=WindowsAzure&f%5B1%5D.Type=SubCategory&f%5B1%5D.Value=WindowsAzure_automation&f%5B1%5D.Text=Automation",target:"_blank",rel:"noopener noreferrer"}},[t._v("Runbook gallery"),s("OutboundLink")],1),t._v(". Runbooks can contain PowerShell "),s("strong",[t._v("Modules")]),t._v(" that make up the functionality in the runbook. As with runbooks, you can create modules yourself or select them from the "),s("a",{attrs:{href:"https://www.powershellgallery.com'",target:"_blank",rel:"noopener noreferrer"}},[t._v("PowerShell gallery"),s("OutboundLink")],1),t._v('">. Runbooks can also contain Python code and Python packages instead of PowerShell modules.')]),t._v(" "),s("p",[t._v("All of this runs in an Azure Automation account. So the hierarchy of components looks like this:")]),t._v(" "),s("ul",[s("li",[t._v("Azure Automation account\n"),s("ul",[s("li",[t._v("Runbook\n"),s("ul",[s("li",[t._v("Module 1")]),t._v(" "),s("li",[t._v("Module 2")]),t._v(" "),s("li",[t._v("Module 3")])])])])])]),t._v(" "),s("h5",{attrs:{id:"scaling-azure-vms-using-a-custom-runbook"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#scaling-azure-vms-using-a-custom-runbook","aria-hidden":"true"}},[t._v("#")]),t._v(" Scaling Azure VMs using a custom Runbook")]),t._v(" "),s("p",[t._v("Let's create a custom runbook that allows us to scale the VMs in our Azure subscription.")]),t._v(" "),s("p",[t._v("We'll start by making sure that we have an Azure Automation Account.")]),t._v(" "),s("ol",[s("li",[t._v("In the Azure portal, find "),s("strong",[t._v("Azure Automation")]),t._v(". You can do this by searching for it in the searchbar at the top of the portal")]),t._v(" "),s("li",[t._v("If you don't have an Azure Automation Account yet, you need to create one by clicking on the button that's in the image below:")])]),t._v(" "),s("img",{attrs:{src:t.$withBase("/files/CreateAutomationAccount.png")}}),t._v(" "),s("p",[t._v("(Create an Azure Automation Account in the Azure portal)")]),t._v(" "),s("ol",{attrs:{start:"3"}},[s("li",[t._v("Now, fill out the creation wizard and create the account.")]),t._v(" "),s("li",[t._v("In the menu of the Azure Automation account, we are going to make sure that we are running the latest version of the PowerShell commandlets. Click on the "),s("strong",[t._v("Modules")]),t._v(" menu item. And now, click on "),s("strong",[t._v("Update Azure Modules")]),t._v(". Updating the modules can take a while, but this ensures that we are running the latest versions of the PowerShell commands")])]),t._v(" "),s("img",{attrs:{src:t.$withBase("/files/UpdatePowerShellModules.png")}}),t._v(" "),s("p",[t._v("(Update PowerShell modules in the Azure portal)")]),t._v(" "),s("ol",[s("li",[t._v("Now to create the runbook that will contain PowerShell. Click on the "),s("strong",[t._v("Runbooks")]),t._v(" menu item and click on "),s("strong",[t._v("Add a runbook")]),t._v(". This opens up the runbook creation blade")]),t._v(" "),s("li",[t._v("Pick a "),s("strong",[t._v("Name")]),t._v(" for the runbook and select "),s("strong",[t._v("PowerShell")]),t._v(" as the runbook type and click "),s("strong",[t._v("Create")])])]),t._v(" "),s("img",{attrs:{src:t.$withBase("/files/CreateARunbook.png")}}),t._v(" "),s("p",[t._v("(Create a runbook in the Azure portal)")]),t._v(" "),s("ol",{attrs:{start:"7"}},[s("li",[t._v("We will now create the PowerShell that does the actual work. We'll start by declaring some variables")])]),t._v(" "),s("div",{staticClass:"language-powershell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("param")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" \n    "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[parameter(Mandatory=$false)]")]),t._v(" \n    "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[bool]")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$scaleUp")]),t._v(" = "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("$false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n    \n    "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[parameter(Mandatory=$false)]")]),t._v(" \n    "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[string]")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$ScaleUpSize")]),t._v(" = "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Standard_D2_V2"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[parameter(Mandatory=$false)]")]),t._v(" \n    "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[string]")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$ScaleDownSize")]),t._v(" = "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Standard_B1ms"')]),t._v("    \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  \n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br")])]),s("p",[t._v('The first one is going to determine if we scale up or down.\nThe second and third variables indicate to which tier we should scale up or down. For instance to "Standard_D2_V2".')]),t._v(" "),s("ol",{attrs:{start:"8"}},[s("li",[t._v("Next, we add PowerShell script to log into Azure. We do that using the AzureRunAsConnection that Azure Automation has created for us automatically")])]),t._v(" "),s("div",{staticClass:"language-powershell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Logging in to Azure..."')]),t._v(" \n    "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$runAsConnectionProfile")]),t._v(" = Get"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("AutomationConnection `\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Name "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"AzureRunAsConnection"')]),t._v("\n    Add"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("AzureRmAccount "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("ServicePrincipal `\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("TenantId "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$runAsConnectionProfile")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("TenantId `\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("ApplicationId "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$runAsConnectionProfile")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ApplicationId `\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("CertificateThumbprint ` "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$runAsConnectionProfile")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CertificateThumbprint "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Out-Null")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Write-Output")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Authenticated with Automation Run As Account."')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br")])]),s("ol",{attrs:{start:"9"}},[s("li",[t._v("Once we are successfully logged in, we can set variables that determine the tier that we scale to. When "),s("strong",[t._v("$ScaleUp")]),t._v(" is true, we use the "),s("strong",[t._v("$ScaleUpSize")]),t._v(" parameter. And when it is false, we use the "),s("strong",[t._v("$ScaleDownSize")]),t._v(" parameter")])]),t._v(" "),s("div",{staticClass:"language-powershell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$scaleUp")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n    "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$ScaleSize")]),t._v("= "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$ScaleUpSize")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n    "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$ScaleSize")]),t._v("= "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$ScaleDownSize")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("ol",{attrs:{start:"10"}},[s("li",[t._v("Now, for the meat of the script. In the script below, the following happens\na. First, we get all of the resource groups and loop through them\nb. In each resource group, we find all of the VMs and loop through them\nc. Next, we get the current size of the VM (so the pricing tier) and compare that against the size that we want to scale to. If the VM is already the same size, we don't scale it\nd. Next, we check if the VM is running and stop it if it is running\ne. Finally, we update the VM with the new size")])]),t._v(" "),s("div",{staticClass:"language-powershell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Start")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("VMAutoScaling"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# a. First, we get all of the resource groups and loop through them")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$RGs")]),t._v(" = Get"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("AzureRMResourceGroup \n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("foreach")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$RG")]),t._v(" in "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$RGs")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n        "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$RGN")]),t._v(" = "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$RG")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ResourceGroupName \n        "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$VMs")]),t._v(" = Get"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("AzureRmVM "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("ResourceGroupName "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$RGN")]),t._v(" \n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("foreach")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$VM")]),t._v(" in "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$VMs")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n                "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# b. In each resource group, we find all of the VMs and loop through them")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$VMName")]),t._v(" = "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$VM")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Name      \n                "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$VMDetail")]),t._v(" = Get"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("AzureRmVM "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("ResourceGroupName "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$RGN")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Name "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$VMName")]),t._v(" \n                "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$VMSize")]),t._v(" = "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$VMDetail")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("HardwareProfile"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("VmSize \n                "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$VMSize")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-ne")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$ScaleSize")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-and")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$ScaleSize")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# c. Next, we get the current size of the VM (so the pricing tier) and compare that against the size that we want to scale to. ")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Write-Output")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Resource Group: '),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$RGN")]),t._v('"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"VM Name: "')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$VMName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Current VM Size: '),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$VMSize")]),t._v('"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$scaleTagSwitch")]),t._v(" : "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$ScaleSize")]),t._v('"')]),t._v("  \n                    "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$VMStatus")]),t._v(" = Get"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("AzureRmVM "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("ResourceGroupName "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$RGN")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Name "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$VMName")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Status \n                    \n                    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# d. Next, we check if the VM is running and stop it if it is running")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$VMStatus")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Statuses"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DisplayStatus "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-eq")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"VM running"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n                        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Write-Output")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"Stopping VM '"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$VMName")]),t._v("'\"")]),t._v(" \n                        Stop"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("AzureRmVM "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("ResourceGroupName "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$RGN")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Name "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$VMName")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Force "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Out-Null")]),t._v(" \n                    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  \n\n                    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# e. Finally, we update the VM with the new size")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$VM")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("HardwareProfile"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("VmSize = "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$ScaleSize")]),t._v(" \n                    Update"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("AzureRmVM "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("VM "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$VM")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("ResourceGroupName "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$RGN")]),t._v("  \n                    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Write-Output")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"Resized VM '"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$VMName")]),t._v("'\"")]),t._v(" `n  \n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("                \n                "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n                    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Write-Output")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"VM '"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$VMName")]),t._v("' is exempted from scaling (Currrent VM size matches scaling size)\"")]),t._v(" \n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br"),s("span",{staticClass:"line-number"},[t._v("25")]),s("br"),s("span",{staticClass:"line-number"},[t._v("26")]),s("br"),s("span",{staticClass:"line-number"},[t._v("27")]),s("br"),s("span",{staticClass:"line-number"},[t._v("28")]),s("br"),s("span",{staticClass:"line-number"},[t._v("29")]),s("br"),s("span",{staticClass:"line-number"},[t._v("30")]),s("br"),s("span",{staticClass:"line-number"},[t._v("31")]),s("br"),s("span",{staticClass:"line-number"},[t._v("32")]),s("br"),s("span",{staticClass:"line-number"},[t._v("33")]),s("br")])]),s("ol",{attrs:{start:"11"}},[s("li",[t._v("Finally, we call the "),s("strong",[t._v("Start-VMAutoscaling")]),t._v(" function")])]),t._v(" "),s("div",{staticClass:"language-powershell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("############################ Start autoscaling function #################### ")]),t._v("\n \n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Start")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("VMAutoScaling \n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Write-Output")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"VM Scaling Completed"')]),t._v(" \n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("ol",{attrs:{start:"12"}},[s("li",[s("p",[t._v("The script is now ready. Click "),s("strong",[t._v("Save")]),t._v(" and click on "),s("strong",[t._v("Test pane")]),t._v(" to test it.")])]),t._v(" "),s("li",[s("p",[t._v("In the test pane, leave all the parameters as they are and click "),s("strong",[t._v("Start")]),t._v(". This will look for VMs in your subscription and scale them down as that is the default setting. This will only work if you have VMs in your subscription. After a while, it will succeed and show that in the output of the Test Pane")])])]),t._v(" "),s("img",{attrs:{src:t.$withBase("/files/TestRunBook.png")}}),t._v(" "),s("p",[t._v("(Test completed in the Azure portal)")]),t._v(" "),s("ol",{attrs:{start:"14"}},[s("li",[s("p",[t._v("Go back to the "),s("strong",[t._v("runbook edit blade")]),t._v(" (you can use the breadcrumb menu in the top to navigate back to it) and click "),s("strong",[t._v("Publish")]),t._v(". This pushes the runbook to 'production', which means that you can now use it and schedule it.")])]),t._v(" "),s("li",[s("p",[t._v("You should be in the blade of the runbook. If not, navigate to it. Here, you can click "),s("strong",[t._v("Schedule")]),t._v(" to set up a schedule to run this workbook on. You can, for instance, schedule the runbook to scale up every morning and scale down every evening. This will save you costs if you don't need to run powerful machines during the night")])])]),t._v(" "),s("img",{attrs:{src:t.$withBase("/files/CreateSchedule.png")}}),t._v(" "),s("p",[t._v("(Create a schedule for the runbook in the Azure portal)")]),t._v(" "),s("h5",{attrs:{id:"conclusion"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#conclusion","aria-hidden":"true"}},[t._v("#")]),t._v(" Conclusion")]),t._v(" "),s("p",[t._v("That's it! Now, we have automated an important task using an Azure Automation PowerShell Runbook that runs on a schedule. Sure, this script should be more sophisticated as it should maybe have more checks and balances and it should be configurable to only scale certain VMs in your subscription. But that's okay as I just wanted to show you how you can go about creating functionality like this. And remember, there are already many pre-made Azure Automation solutions available in the "),s("a",{attrs:{href:"https://gallery.technet.microsoft.com/scriptcenter/site/search?f%5B0%5D.Type=RootCategory&f%5B0%5D.Value=WindowsAzure&f%5B1%5D.Type=SubCategory&f%5B1%5D.Value=WindowsAzure_automation&f%5B1%5D.Text=Automation",target:"_blank",rel:"noopener noreferrer"}},[t._v("Runbook gallery"),s("OutboundLink")],1),t._v(".")])])},[],!1,null,null,null);a.default=n.exports}}]);