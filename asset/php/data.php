<?php

require_once 'database.php';
class quizz extends Connection
{
    function getdata()
    {
        $sql = "SELECT question,
        MAX(CASE WHEN a.id = (q.id*4)-3 THEN a.answer END) AS answer_1,MAX(CASE WHEN a.id = (q.id*4)-3 THEN a.type END) AS type1,
        MAX(CASE WHEN a.id = (q.id*4)-2 THEN a.answer END) AS answer_2,MAX(CASE WHEN a.id = (q.id*4)-2 THEN a.type END) AS type2,
        MAX(CASE WHEN a.id = (q.id*4)-1 THEN a.answer END) AS answer_3,MAX(CASE WHEN a.id = (q.id*4)-1 THEN a.type END) AS type3,
        MAX(CASE WHEN a.id = (q.id*4) THEN a.answer END) AS answer_4,MAX(CASE WHEN a.id = (q.id*4) THEN a.type END) AS type4
 FROM questions q
 JOIN answers a ON q.id = a.question_id
 GROUP BY q.id";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute();
        $result = $stmt->fetchAll();
        echo json_encode($result, JSON_PRETTY_PRINT);
    }
    function Score()
    {
        $sql = "SELECT sum(answers.type) FROM answers where answers.type = 1";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute();
        $result = $stmt->fetchAll();
        echo json_encode($result, JSON_PRETTY_PRINT);
    }
}
(new quizz)->getdata();
