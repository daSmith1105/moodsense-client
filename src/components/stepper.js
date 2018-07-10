import React from 'react';
import { Steps, Button, message } from 'antd';
import MoodSelect from './mood-select';
import NotesPage from './notes-page';
import ConfirmationPage from './confirmation-page';
import './stepper.css';
import requiresLogin from './requires-login';

const currentNote = "This should be the current note the user has typed up."
const Step = Steps.Step;

const steps = [
  {
    title: 'Select Mood',
    content: <MoodSelect />,
  }, 
  {
    title: 'Add a note',
    content: <NotesPage icon="https://cdn.shopify.com/s/files/1/1061/1924/files/Slightly_Smiling_Face_Emoji_Icon_42x42.png?16228697460559734940" title='Happy'/>,
  }, 
  {
    title: 'View and Confirm',
    content: <ConfirmationPage note={currentNote}/>,
  }
];

export class Stepper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
    };
  }

  next() {
    const current = this.state.current + 1;
    this.setState({ current });
  }

  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }

  render() {
    const { current } = this.state;

    return (
      <div className="stepper">
       <div className="steps-action">
           {
            current > 0
            && (
            <Button className="prev-btn" onClick={() => this.prev()}>
              Previous
            </Button>
            )
          }
          {
            current === steps.length - 1
            && <Button type="primary" onClick={() => message.success('All Done!')}>Done</Button>
          }
          {
            current < steps.length - 1
            && <Button className="next-btn" type="primary" onClick={() => this.next()}>Next</Button>
          }
        </div>
        <br />
        <div className="steps">
        <Steps size="small" current={current} className="steps-nav">
          {steps.map(item => <Step size="small" key={item.title} title={item.title}/> )}
        </Steps>
        </div>
        <div className="steps-content">{steps[current].content}</div>
      </div>
    );
  }
}

export default requiresLogin()(Stepper);