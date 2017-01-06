#DB

##messagesテーブル
| column   | type        | option         |
|:---------|:------------|:---------------|
| text     | text        | NULLNOT, INDEX |
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
has_many :usergroups   
has_many :groups, through: :usergroups   

---
##groupsテーブル
| column   | type    | option         |
|:---------|:--------|:---------------|
| name     | string  | NULLNOT, INDEX |

###Association
has_many :messages   
has_many :usergroups   
has_many :users, through: :usergroups   

---
##usergroupsテーブル
| column   | type        | option         |
|:---------|:------------|:---------------|
| group_id | references  |                |
| user_id  | references  |                |

###Association
belongs_to :user   
belongs_to :group   