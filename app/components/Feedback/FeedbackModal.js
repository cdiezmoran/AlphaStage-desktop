import React, { Component } from 'react';

import VideoPlayer from '../VideoPlayer';

export default class FeedbackModal extends Component {
  render() {
    const { feedback } = this.props;

    return (
      <div className="modal fade" id="myModal" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4>Feedback by user</h4>
              <h6>Date</h6>
            </div>
            <div className="modal-body">
              <VideoPlayer id="feedback-video" src={feedback.gameplay.cloudfrontURL}/>
              <div className="modal-messages">
                <h4>Good <span className="modal-desc"> - What the tester liked</span></h4>
                <p>
                  {feedback.good}
                </p>
                <h4>Better <span className="modal-desc"> - What the tester thought could be better</span></h4>
                <p>
                  {feedback.better}
                </p>
                <h4>Best <span className="modal-desc"> - What the tester loved</span></h4>
                <p>
                  {feedback.best}
                </p>
              </div>
            </div>
            <div className="modal-footer">
              <a href="#" className="btn play-btn">Placeholder</a>
            </div>
          </div>

        </div>
      </div>
    )
  }
}
