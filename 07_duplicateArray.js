let a=[4,5,6,4,5,8,5,7,8,9,7,8];
let b=[]
for(i=0;i<a.length;i++){
   // for(j=0;j<a.length+1;j++)
   {
        if(b.includes(a[i])){
            

            continue;
        }
        else{
            b.push(a[i])

        }

    }
}
console.log(b);