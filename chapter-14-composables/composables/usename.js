// name export 
export function usename(){
  const fName="uzair";
  const lName="khan";
  const fulname=ref(fName + " " + lName)

  return fulname;
}