select 
concat(
'{"name": "',TABLE_NAME, '",',
'"titlle": "',TABLE_NAME, '",',
'"description": "',TABLE_NAME, '",',
'"list": "select * from ',TABLE_NAME, ' ",'
, '"JSONDefinition": ['
)
from information_schema.TABLES
where TABLE_NAME = 'con_periodos'