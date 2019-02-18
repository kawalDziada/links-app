import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, setStartDate, setEndDate } from '../actions/filters';


class LinkListFilters extends React.Component {
    state = {
        calendarFocused: null
    };
    onDatesChange = ({startDate, endDate}) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    };
    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }));
    };
    render() {
        return (
            <div>
                <div className="content-container">
                    <div className="input-group">
                        <div className="input-group__item">
                            <input 
                            className="text-input"
                            type='text' 
                            value={this.props.filters.text} 
                            onChange={(e) => {
                            this.props.dispatch(setTextFilter(e.target.value));
                            }}
                            />
                        </div>
                        <div className="input-group__item">
                            <DateRangePicker
                            startDate={this.props.filters.startDate}
                            startDateId={"start"}
                            endDate={this.props.filters.endDate}
                            endDateId={"end"}
                            onDatesChange={this.onDatesChange}
                            focusedInput={this.state.calendarFocused}
                            onFocusChange={this.onFocusChange}
                            showClearDates={true}
                            numberOfMonths={1}
                            isOutsideRange={() => false}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};

export default connect(mapStateToProps)(LinkListFilters);