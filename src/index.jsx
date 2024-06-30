import React from 'react';
import { createRoot } from 'react-dom/client';
import Header from './Header';
import CardList from './CardList';
import { getData } from './data'
import './style.css'

class DataWisata extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataWisata: getData(),
        };
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
    }

    onDeleteHandler(id) {
        const dataWisata = this.state.dataWisata.filter(wisata => wisata.id !== id);
        this.setState({ dataWisata });
    }

    render() {
        return (
            <div className='data-wisata'>
                <Header />
                <CardList
                    dataWisata={this.state.dataWisata}
                    onDelete={this.onDeleteHandler}
                />
            </div>
        );
    }
}

const root = createRoot(document.getElementById('root'));
root.render(<DataWisata />);
