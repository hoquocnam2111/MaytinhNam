let op1='';
let op2='';
let opt;
function buttonss(btn){
    const toan = btn.innerText;
    const resultin= document.getElementById('resultss');
    if(isNaN(toan)){
        if(toan=='C'){
            op1='';
            op2='';
            opt=undefined;
            resultin.value= '';
            return;
        }
        if(toan=='='){
            const ketqua = perform(op1,op2,opt);
            resultin.value=ketqua;
            op1='';
            op2='';
            opt=undefined;
        }
        else{
            opt=toan;
        }
    }
    else{
        if(opt){
            op2+=toan;
            resultin.value=op2;
        }
        else{
            op1+=toan;
            resultin.value=op1;
        }
    }
}
function perform(a,b,c){
    a=Number(a);
    b=Number(b);
    switch(c){
        case '+':
        return a+b;
        case '-':
            return a-b;
            case '*':
                return a*b;
                case ':':
                    return a/b;
                                

    }
}