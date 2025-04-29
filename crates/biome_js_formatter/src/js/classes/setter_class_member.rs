use crate::prelude::*;

use biome_formatter::write;
use biome_js_syntax::JsSetterClassMember;
use biome_js_syntax::JsSetterClassMemberFields;

#[derive(Debug, Clone, Default)]
pub(crate) struct FormatJsSetterClassMember;

impl FormatNodeRule<JsSetterClassMember> for FormatJsSetterClassMember {
    fn fmt_fields(&self, node: &JsSetterClassMember, f: &mut JsFormatter) -> FormatResult<()> {
        let JsSetterClassMemberFields {
            modifiers,
            set_token,
            name,
            l_paren_token,
            parameter,
            comma_token,
            r_paren_token,
            body,
        } = node.as_fields();

        let should_insert_space_inside_parenthesis = f.options().delimiter_spacing().value();

        write![
            f,
            [
                modifiers.format(),
                space(),
                set_token.format(),
                space(),
                name.format(),
                l_paren_token.format(),
                maybe_space(should_insert_space_inside_parenthesis),
                parameter.format(),
                maybe_space(should_insert_space_inside_parenthesis),
                comma_token.format(),
                r_paren_token.format(),
                space(),
                body.format(),
            ]
        ]
    }
}
