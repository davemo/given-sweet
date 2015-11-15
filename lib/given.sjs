let Given = macro {
  rule { -> $expression } => { $expression }
}

let When = macro {
  rule { -> $expression } => { $expression }
}

let Then = macro {
  rule { -> $expression:expr } => {
    alert($expression)
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

describe "adding" {
  context "adding 1" {
    Given -> x = 5
    When  -> x += 1
    Then  -> x == 6
  }
}
