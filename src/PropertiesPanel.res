%raw(`require("./PropertiesPanel.css")`)

// Import the BoxAdjuster component
module BoxAdjuster = {
  @react.component
  @module("./components/BoxAdjuster") // Ensure the path is correct
  external make: unit => React.element = "default"
}



module Collapsible = {
  @react.component
  let make = (~title, ~children) => {
    let (collapsed, toggle) = React.useState(() => false)

    <section className="Collapsible">
      <button className="Collapsible-button" onClick={_e => toggle(_ => !collapsed)}>
        <span> {React.string(title)} </span>
        <span> {React.string(collapsed ? "+" : "-")} </span>
      </button>
      {collapsed ? React.null : <div className="Collapsible-content"> {children} </div>}
    </section>
  }
}

module ViewExamples = {
  type example = {
    id: int,
    some_int: int,
    some_text: string,
  }

  @react.component
  let make = () => {
    let (examples: option<array<example>>, setExamples) = React.useState(_ => None)

    React.useEffect1(() => {
      Fetch.fetchJson("http://localhost:12346/examples")
      |> Js.Promise.then_(examplesJson => {
        Js.Promise.resolve(setExamples(_ => Some(Obj.magic(examplesJson))))
      })
      |> ignore
      None
    }, [setExamples])

    <div>
      {switch examples {
      | None => React.string("Loading examples....")
      | Some(examples) =>
        examples
        ->Js.Array2.map(example =>
          React.string(`Int: ${example.some_int->Js.Int.toString}, Str: ${example.some_text}`)
        )
        ->React.array
      }}
    </div>
  }
}

@genType
@genType.as("PropertiesPanel")
@react.component
let make = () =>
  <aside className="PropertiesPanel">
    <Collapsible title="Load examples"> <ViewExamples /> </Collapsible>
    <Collapsible title="Margins & Padding">
      <BoxAdjuster /> // Use the imported BoxAdjuster in PascalCase here
    </Collapsible>
    <Collapsible title="Size"> <span> {React.string("example")} </span> </Collapsible>
  </aside>
