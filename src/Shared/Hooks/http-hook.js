import { useState, useCallback, useRef, useEffect } from 'react';

export const useHttpClient = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();
    const [status, setStatus] = useState();

    const activeHttpRequest = useRef([]);

    const sendRequest = useCallback(async (url, method = 'GET', body = null, headers = {}) => {
        setLoading(true);

        const httpAbortCtrl = new AbortController();
        activeHttpRequest.current.push(httpAbortCtrl);

        try {
            const response = await fetch(url, {
                method,
                body,
                headers,
                signal: httpAbortCtrl.signal
            });
            const responseData = await response.json();

            activeHttpRequest.current = activeHttpRequest.current.filter(requestCtrl => requestCtrl !== httpAbortCtrl);

            if (!response.ok) {
                throw new Error(responseData.message);
            }
            setLoading(false);
            setStatus(response.ok);
            return responseData;
        } catch (err) {
            setError(err.message);
            setLoading(false);
            throw err;
        }
    }, []);
    const clearError = () => {
        setError(null);
    }
    useEffect(() => {
        return () => {
            activeHttpRequest.current.forEach(abortCtr => abortCtr.abort());
        }
    }, []);
    return { error, loading, status, sendRequest, clearError };
}