WITH ConfirmationStats AS (
    SELECT
        user_id,
        COUNT(*) AS total_requests,
        SUM(CASE WHEN action = 'confirmed' THEN 1 ELSE 0 END) AS confirmed_requests
    FROM Confirmations
    GROUP BY user_id
)

SELECT
    s.user_id,
    COALESCE(ROUND(confirmed_requests * 1.0 / total_requests, 2), 0) AS confirmation_rate
FROM Signups s
LEFT JOIN ConfirmationStats cs
ON s.user_id = cs.user_id;
