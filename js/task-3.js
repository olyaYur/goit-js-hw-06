
"use strict"; 



class StringBuilder {
    initialValue = " ";
    #value;
    constructor(initialValue){
        this.#value = initialValue.split( );
    }

    getValue(){
        return this.#value.join("");
    }
    padEnd(str){   
        return this.#value.push(str);
    }

    padStart(str){
        return this.#value.unshift(str);
    }
    padBoth(str) {
        return this.#value.push(str) && this.#value.unshift(str);
    }

};

const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="