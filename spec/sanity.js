describe "adding" {
  context "adding 1" {
    Given -> x = 5
    When  -> x += 1
    Then  -> x == 6
  }
}
