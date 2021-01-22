import { app } from 'electron'
import Window from './window'
class Program {
  constructor () {
    if (!Program.instance) {
      // super()
      app.on('ready', () => {
        this.start()
      })
      Program.instance = this
    }
    return Program.instance
  }

  start () {
    this.window = new Window()
    this.window.showWindow('loginWindow')
  }
}

export default Program
