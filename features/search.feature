Feature:Search a tickets
    Scenario:Next day's session
        Given user is on site page
        When user search by ticket tomorrow
        Then user sees the "Электронный билет"