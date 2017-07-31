select 
concat(
'{"name": "' , column_name , '",' 
, '"title": "' , column_name , '",' 
, '"description": "' , column_name , '",' 
, '"type": "' , data_type , '",' 
, '"view": true,' 
, '"update": true,'
, '"insert": true,'
, '"key": "' , ifnull(column_key,''), '",'
, '"default": "' , ifnull(if(column_default = 'null', '',column_default), '') , '",'
, '"nulleable": ' , if(column_default = 1 , 'true', 'false') , ','
, '"size": ' , ifnull(character_maximum_length, '0') , ','
, '"ordinal": ' , ordinal_position , '},'
)
from information_schema.COLUMNS
where table_name = 'con_periodos'