#greeting-extension

#Follow the detail guideline
1. cd to one of two folder (version_0.1.0 or version_0.2.0). Ex cd version_0.1.0.
2. copy src folder to the same location of package.json file.
3. Execute npm install.
4. Execute npm run build.
5. cd build folder.
6. Open index.html. Cut all script inside the first <script> tag. Ex: "<script>!function(l){function e(e)...var s=n;a()}([])</script>".
7. create file index.js then past these script with following path: static/js/index.js.
8. Back to index.html. Add reference src="/static/js/index.js" in script tag at step 6.
9. Change manifest.json with content like [Manifest](#Manifest)
10. Enable Developer mode on Chrome. Browse to build folder by clicking "Load Unpackaged" button. Done.

#Manifest
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