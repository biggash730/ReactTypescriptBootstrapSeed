import * as React from 'react'
import './mainContent.scss'

export interface MainContentProps {}

export interface MainContentState {}

class MainContent extends React.Component<MainContentProps, MainContentState> {
  //state = { :  }
  render() {
    return <div className="main-content flex-fill p-2">Main Content</div>
  }
}

export default MainContent
