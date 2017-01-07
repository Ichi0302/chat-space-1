#DB

##messagesテーブル
| column   | type        | option         |
|:---------|:------------|:---------------|
| text     | text        | NULLNOT        |
| image    | string      |                |
| group_id | references  |                |
| user_id  | references  |                |

###Association
belongs_to :user   
belongs_to :group   

---
##usersテーブル
| column   | type    | option         |
|:---------|:--------|:---------------|
| name     | string  | NULLNOT, INDEX |

###Association
has_many :messages   
has_many :groupusers   
has_many :groups, through: :groupusers   

---
##groupsテーブル
| column   | type    | option         |
|:---------|:--------|:---------------|
| name     | string  | NULLNOT        |

###Association
has_many :messages   
has_many :groupusers   
has_many :users, through: :groupusers   

---
##groupusersテーブル
| column   | type        | option         |
|:---------|:------------|:---------------|
| group_id | references  |                |
| user_id  | references  |                |

###Association
belongs_to :group   
belongs_to :user   