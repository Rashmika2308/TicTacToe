// import './App.css';

function List() {
  return (
    <div>
      <h1 style={{textAlign:'left'}}>Ordered list</h1>
      <ol style={{textAlign:'left', fontSize:'32px'}}>
        <li>cake</li>
        <li>chocolate</li>
        <li>ice cream</li>
        <li>cookies</li>
      </ol>
    </div>
  );
}
function Table()
{
    return(
        <div>
          <h1 style={{textAlign:'left'}}>talbe structure</h1>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Branch</th>
                    <th>Year</th>
                </tr>
                <tr>
                <td>Rash</td>
                <td>Computer</td>
                <td>2023</td>
                </tr>
                <tr>
                <td>Yash</td>
                <td>Computer</td>
                <td>2023</td>
                </tr>
            </table>
        </div>
    )
}
export {List,Table};