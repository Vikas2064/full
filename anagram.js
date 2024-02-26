function array_to_string(str1)
{
   return Array.from(str1);
}

function Anagram(str1,str2)
{
   if(array_to_string(str1)===array_to_string(str2))
   {
    return true;
   }
   return false;
}


let res=Anagram("hello", "elloh")
console.log(res);
