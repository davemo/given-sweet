let Given = macro {
  rule { -> $expression } => { $expression }
}

let When = macro {
  rule { -> $expression } => { $expression }
}

let Then = macro {
  rule { -> $expression:expr } => {
    require('assert')($expression)
  }
}

let describe = macro {
  rule { $description { $body ... } } => {
    console.log($description)
    $body ...
  }
}

let context = macro {
  rule { $description { $body ... } } => {
    console.log($description)
    $body ...
  }
}

export Given;
export When;
export Then;
export describe;
export context;
