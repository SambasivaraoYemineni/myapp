import React from 'react'

export default function App4(props) {
    App1.defaultProps = {name:"Cathy",age:25};
  return (
    <div>App4
        Hello {props.name}.You are {props.age}
    </div>
  );
}
                                                                                                            