import { createContext, useReducer } from "react"
import AppReducer from "./AppReducer";
import axios from 'axios';

// initial State
const initialState = {
    transactions: [],
    error: null,
    loading: true
}

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    async function getTransactions() {
        try {
            const res = await axios.get('/api/v1/transactions');

            dispatch({
                type: 'GET_TRANSACTIONS',
                payload: res.data.data
            });
        } catch (err) {
            dispatch({
                type: 'TRANSACTIONS_ERROR',
                payload: err.response.data.error
            })
        }
    }

    // Actions
    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }

    return (
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            addTransaction,
            deleteTransaction,
            getTransactions,
            loading: state.loading,
            error: state.error
        }}>
            {children}
        </GlobalContext.Provider>
    );
} 