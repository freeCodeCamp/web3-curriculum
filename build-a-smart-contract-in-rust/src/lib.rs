// Write your code here:


// Do not edit below this line!
#[cfg(test)]
mod tests {
    use serde::{Serialize, Deserialize};

    #[test]
    fn account_struct_is_defined() {
        use super::Account;
        let _acc: Account;
        assert!(true, "This test should compile to pass");
    }
    #[test]
    fn account_struct_has_total_clicks() {
        use super::Account;
        fn _total_clicks(acc: Account) -> u64 {
            acc.total_clicks
        }
        assert!(true, "This test should compile to pass");
    }
    #[test]
    fn account_struct_has_clickers() {
        use super::Account;
        fn _clickers(acc: Account) -> Vec<String> {
            acc.clickers
        }
        assert!(true, "This test should compile to pass");
    }
    #[test]
    fn account_struct_is_serde() {
        use super::Account;
        fn account_serde<'a, T>(_acc: T)
        where T: Serialize + Deserialize<'a>
        {
            assert!(true, "This test should compile to pass");
        }
        let new_acc = Account {
            total_clicks: 10,
            clickers: vec![String::from("Test")]
        };
        account_serde(new_acc);
    }
    #[test]
    fn context_struct_is_defined() {
        use super::Context;
        let _con: Context;
        assert!(true, "This test should compile to pass");
    }
    #[test]
    fn context_struct_has_base_account() {
        use super::{Account, Context};
        fn _base_account(con: Context) -> Account {
            con.base_account
        }
        assert!(true, "This test should compile to pass");
    }
    #[test]
    fn context_struct_is_serde() {
        use super::{Context, Account};
        fn context_serde<'a, T>(_acc: T)
        where T: Serialize + Deserialize<'a>
        {
            assert!(true, "This test should compile to pass");
        }
        let new_acc = Account {
            total_clicks: 10,
            clickers: vec![String::from("Test")]
        };
        let new_con = Context {
            base_account: new_acc
        };
        context_serde(new_con);
    }
}