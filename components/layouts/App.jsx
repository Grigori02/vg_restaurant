import React from 'react';
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";

const App = ({children}) => {
    return (
        <div>
            <Header/>
            {children}
            <Footer/>
        </div>
    );
};

export default App;