import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { ListView } from 'react-native';
import { employeesFetch } from '../actions';
import ListItem from './ListItem';

class EmployeeList extends Component {
    componentWillMount() {
        this.props.employeesFetch();
        this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this.createDataSource(nextProps);
    }

    createDataSource(props) {
        const { employees } = props;
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(employees); 
    }

    renderRow(employee) {
        return <ListItem employee={employee}></ListItem>;
    }

    render() {
        console.log(this.props);
        return (
            <ListView
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            >
            </ListView>
        );
    }
}

const mapStateToProps = state => {
    const employees = _.map(state.employees, (val, uid) => {
        return {
            ...val,
            uid
        };
    });

    return { employees };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);