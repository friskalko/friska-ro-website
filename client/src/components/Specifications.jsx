import React from 'react';
import styles from './Specifications.module.scss';
const Specifications = ({ properties }) => {
    return (
        <div className={styles['testClass']}>
            <div className="specs-heading">Specifications</div>
            <div className="specs-table">
                <table>
                    <tbody>
                        {properties.map((property) => {
                            return (
                                <tr key={property._id}>
                                    <th>{property.key}</th>
                                    <td>{property.value}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Specifications;
