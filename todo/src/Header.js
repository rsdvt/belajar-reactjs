import React, { Component } from 'react';
import Moment from 'moment';

export default class Header extends Component {
    render() {
        let indonesia = require('moment/locale/id');
        Moment.updateLocale('id', indonesia);
        return (
            <div>
                <h3>Aplikasi Aktivitas Harian</h3>
                <p>{Moment().format('dddd')} {Moment().format('LLL')}</p>
            </div>
        );
    }
}
