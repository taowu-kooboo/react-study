import React from 'react';
import { connect } from 'react-redux';
import { Result, List, WhiteSpace } from 'antd-mobile';

@connect(state => state.user)
class User extends React.Component {
    render() {
        const props = this.props;
        const Item = List.Item;
        return props.user ? (
            <div>
                <Result
                    img={
                        <img
                            src={require(`../img/job.png`)}
                            style={{ width: 50 }}
                            alt=''
                        />
                    }
                    title={props.user}
                    message={props.type === 'boss' ? props.company : null}
                />
                <List renderHeader={() => '简介'}>
                    <Item multipleLine>
                        {props.title}
                        {props.desc.split('\n').map(v => (
                            <p key={v}>{v}</p>
                        ))}
                        {props.money ? <div>薪资：{props.money}</div> : null}
                    </Item>
                </List>
                <WhiteSpace />
                <List>
                    <Item>注销</Item>
                </List>
            </div>
        ) : null;
    }
}

export default User;
