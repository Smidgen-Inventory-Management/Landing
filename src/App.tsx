import Navbar from "./components/navbar"
import ButtonGroup from "./components/ButtonGroup"
import TextInput from "./components/TextInput"
import "./css/reset.css"
import "./css/global.css"
import "./css/components.css"

function App() {


  return (
    <div className="page-content">
      <Navbar />
      <ButtonGroup />
      <div className="content">

        <button className="button-primary" disabled={false} >Log In</button>
        <button className="button-primary" disabled={true} >Log In</button>
        <button className="button-tertiary" disabled={false} >Log In</button>
        <button className="button-tertiary" disabled={true} >Log In</button>
        <button className="button-info" disabled={false} >Log In</button>
        <button className="button-info" disabled={true} >Log In</button>
        <button className="button-destructive" disabled={false} >Log In</button>
        <button className="button-destructive" disabled={true} >Log In</button><h1>Test</h1>
        <h2>Test</h2>
        <h3>Test</h3>
        <h4>Test</h4>
        <h5>Test</h5>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis inventore animi, aliquam dolorem est, facilis nam accusantium eius eveniet nisi sunt voluptatem impedit illum ipsam in ratione vero itaque rem praesentium deleniti eum commodi culpa. Sed modi voluptates molestias, animi, ea asperiores nesciunt consequuntur quaerat excepturi reiciendis consequatur delectus maiores repellendus. Optio enim culpa quaerat accusantium natus, harum ipsa dolor minima recusandae laboriosam hic at nisi labore suscipit cumque cum est, explicabo necessitatibus animi quia officia, quod quo assumenda? Porro autem officiis nobis tempore similique doloribus pariatur possimus molestias maiores quaerat? Amet blanditiis expedita quo porro autem magnam reprehenderit veniam.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus explicabo, provident excepturi laborum consequatur quis temporibus ducimus dolore corporis atque dolorum voluptatibus deserunt vel nostrum esse aperiam amet totam assumenda autem et. Nam eius mollitia id consectetur rerum doloribus ducimus!</p>

        <form action="" method="get">
          <label className="inline-label"><input type="radio" name="radio" />Radio Button</label>
          <label className="inline-label"><input type="radio" name="radio" />Radio Button</label>
          <label className="inline-label"><input type="checkbox" name="checkbox" className="checkbox" /> Checkbox</label>
          <label className="inline-label"><input type="checkbox" name="checkbox" className="checkbox" /> Checkbox</label>
          <input type="checkbox" name="checkbox" className="toggle" />
          <TextInput />
        </form>
        <h2>Need to edit Select</h2>
        <select>
          <option>The quick brown fox jumps over the lazy dog</option>
          <option>The quick brown fox jumps over </option>
          <option>The quick the lazy dog</option>
          <option>The quick dog</option>
        </select>


      </div>
    </div>
  )
}

export default App
