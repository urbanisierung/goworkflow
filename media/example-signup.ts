export class UserOnboarding {
    public signup() {
      try {
        this.createUser()
        this.createCrmContact()
        this.sendWelcomeMail()
        this.notifyMessengerChannel()
        this.scheduleOnboardingSession()
      } catch (error) {
        // 2009/05/21 FIXME: implement a useful compensation
      }
      
  }