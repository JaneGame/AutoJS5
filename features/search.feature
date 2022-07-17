Feature:Search a tickets
    Scenario:Next day's session
        Given user is on site page
        When user selects day 1
        And user chooses session 1
        And user chooses seat 5
        And user clicks submit button
        Then user sees the "Электронный билет"


    Scenario:No tickets session
        Given user is on site page
        When user selects day 1
        And user chooses session 1
        And user chooses seat 3
        Then ticket not buy