/*********   Theorie **********/

// push() / pop()
// push --> Daten rein ... (+)
// let arr = [];
// output(arr);
// arr.push("Ich");
// output(arr);
// arr.push("bin");
// output(arr);
// arr.push("Max");
// output(arr);
// // pop() --> Daten raus ... (-)
// output(arr.pop());
// output(arr);
// output(arr.pop());
// output(arr);
// output(arr.pop());
// output(arr);

/*
Aufgabe:
Erstellen Sie eine JS-Struktur, die Ihnen den folgenden String 
einer HTML-Seite ausgibt:
<html><head></head><body><h1></h1><p></p></body></html>
Verwenden Sie dafür die untenstehenden Arrays
*/

const ERR_STR   = "ERROR";
const COBJ      = {open_o:"<",close_o:"</",close:">"}
const CONTROLS  = ["<", "</", ">"];
const TAGS = [  "html",
				"head","head",
				"body",
                "h1","h1",
                "p","p",
                "ul","li","li","li","li","li","li","ul",
                "p","p",
                "ol","li","li","ol",
                "body",
				"html"
            ];

let stack = [];

// Modul: HTML-Synthese | Test
// output(getHTML());
function getHTML() {

    let htmlstr = "";

    for (let i = 0; i < TAGS.length; i++) 
    {   
        if (isOpenElement()) 
        // if(true)
        // if(false)
        {
            htmlstr += getElement(TAGS[i],"open");
        } else {
            htmlstr += getElement(TAGS[i],"close"); 
        }
        
        
    }

   return htmlstr;
}

// Modul: Zusammenbau der Elements: <tagStr> --> Tests:
// output(getElement(TAGS[1],"open"));
// output(getElement(TAGS[1],"close"));
// output(getElement(TAGS[1]));
function getElement(tag,op) {
    switch (op) {
        case "open":
            return COBJ.open_o + tag + COBJ.close;
        case "close":
            return COBJ.close_o + tag + COBJ.close;
    
        default:
            return ERR_STR;
    }
}

output(isOpenElement(TAGS[0]));
output(isOpenElement(TAGS[1]));
output(isOpenElement(TAGS[2]));
output(isOpenElement(TAGS[3]));
output(isOpenElement(TAGS[4]));
function isOpenElement(tag) {
    
    let cond = (tag != stack[stack.length -1]);

    if (cond) {
        stack.push(tag);
        output(stack);
        return true;
    } else {
        stack.pop();
        output(stack);
        return false;
    }
    
    
}

// Modul: Ausgabe | Test
//output("hi");
function output(outputData) {
    console.log(outputData);
}
