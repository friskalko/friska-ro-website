import React from 'react';
import styles from './Specifications.module.scss';
const Specifications = ({ properties }) => {
    return (
        <div className={styles['specs']}>
            <div className={styles['specs__heading']}>Specifications</div>
            <div className={styles['specs__table']}>
                <table className={styles['specs__table-content']}>
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
