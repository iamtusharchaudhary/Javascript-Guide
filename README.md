# Javascript Guide
### JavaScript is the programming language of the Web and it is easy to learn.<br/>
### Javascript is a scripting laguage work with html css and web browsers to make web page alive.
<hr/>
<li>Script Tag </li><br/>
<li>Script Attribute</li>
<hr/>

## The Script Tag

< script > tag is used to embed or reference external JavaScript code within an HTML document. The < script > tag supports various attributes that can modify its behavior and specify additional settings.

## Script Tag Attribute

> src: This attribute is used to specify the source file URL of the JavaScript code to be loaded.

> type: The type attribute indicates the MIME type of the script content. The default value is "text/javascript". For modern JavaScript, you can use "module" to enable ES6 module

> async: The async attribute specifies that the script should be executed asynchronously. This allows the rest of the HTML page to load and render without waiting for the script to be fully downloaded and executed

> defer: The defer attribute indicates that the script should be executed after the HTML document has been parsed. This ensures that the script does not block the parsing and rendering of the HTML page

> Integrity: The integrity attribute provides a security feature that allows you to specify a cryptographic hash of the script file. This ensures that the script is not modified or tampered with during delivery.

> crossorigin: The crossorigin attribute is used when loading scripts from different domains. It controls whether the script can access resources from a different origin.
