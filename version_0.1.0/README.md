# greeting-extension v0.1.0
https://github.com/tantt2810/chrome-greeting-extension/version_0.1.0/result/version_0.1.0.PNG

# Guide


# Manifest
{
   "manifest_version":2,
   "name":"GreetingExtension",
   "description":"The nice greeting extension for new tab. Includes watch, greeting, searching, nice quotes and some common social links.",
   "version":"1.0.0",
   "author":"Tonio",
   "browser_action":{
      //"default_popup":"popup.html",
      //"default_icon":"tab-icon.png",
      "default_title":"Have a good day"
   },
   "chrome_url_overrides":{
      "newtab":"index.html"
   },
   "permissions":[
      "activeTab"
   ]
}