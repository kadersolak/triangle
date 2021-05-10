function isTriangle(a,b,c)
{
    if ((typeof(a)=== null) ||(typeof(b)=== null) || (typeof(c)=== null)){
        return false;
    }
    if ((typeof(a)!== "number") || (typeof(b)!== "number")||(typeof(c)!== "number")){
        return false;
    }
    if ((a <= 0) || (b <= 0) || (c <= 0)) {
        return false;
    }
    if ((a + b < c) || (a + c < b) || (b + c < a)) {
        return false;
      }
    return true;     
}
module.exports = isTriangle;