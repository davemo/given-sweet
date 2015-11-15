let Given = macro {
  rule { -> $expression } => { $expression }
}

export Given;

let When = macro {
  rule { -> $expression } => { $expression }
}

export When;

let Then = macro {
  rule { -> $expression:expr } => {
    require('assert')($expression)
  }
}

export Then;

let describe = macro {
  rule { $description { $body ... } } => {
    console.log($description)
    $body ...
  }
}

export describe;

let context = macro {
  rule { $description { $body ... } } => {
    console.log($description)
    $body ...
  }
}

export context;
