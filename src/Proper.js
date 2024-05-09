function MyComponent5(props)
{
   return(
    <h1 style={{textAlign:'left'}}>properties{props.branded.nam}!{props.branded.model}</h1>
   )
}
function MyComponent6()
{
  const Carinfo={nam:"rash",model:"x1",price:5000};
  return(
    <>
    <h2 style={{textAlign:'left'}}>properties of the brand</h2>
    <MyComponent5 branded={Carinfo} />
    </>
  )
}
export default MyComponent6;