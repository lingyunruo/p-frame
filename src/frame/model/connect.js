import React from 'react';

export default function connect(HomePage) {

    return class extends React.Component {
        constructor(props) {
            super(props);

            this.state = {};

            Object.values(props.store)
                .forEach((model) => {
                    this.state[model.name] = model.data;

                    model.on('change', (obj) => {
                        this.setState({
                            [model.name]: model.data
                        });
                    });
                });
        }

        render() {
            return (
                <HomePage
                    {...this.props}
                    {...this.state}
                />
            );
        }
    }

}