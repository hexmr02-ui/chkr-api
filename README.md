# CC Checker API

🔍 **Welcome to the CC Checker API!**

This is a simple API proxy for checking credit cards using the official API at [https://api.chkr.cc/](https://api.chkr.cc/).

---

## How to Use

Make a GET request to the following endpoint with the `cc` query parameter:

```
/api/check?cc=5121079814754898|05|2029|742
```

---

## Example Request

```bash
curl "https://chkr-api.vercel.app/api/check?cc=5121079814754898|05|2029|742"
```

Or open it in your browser:

[https://chkr-api.vercel.app/api/check?cc=5121079814754898|05|2029|742](https://chkr-api.vercel.app/api/check?cc=5121079814754898|05|2029|742)

---

## Notes

- This API supports **CORS**, allowing you to use it directly in frontend applications.
- If you access `/api/check` without the `cc` query parameter, you will receive usage instructions in JSON format.
- The API acts as a proxy for the official `https://api.chkr.cc/` POST endpoint.

---

## Example Response

```json
{
  "status": "success",
  "message": "...",
  "data": { /* card check result */ }
}
```

---

## Contact

For any issues or suggestions, please feel free to open an issue or contact the maintainer.
