import { SetColorMode } from './types';
export default function useTheme(): {
    color: (args_0: "transparent" | "elevatedDefaultBg" | "elevatedHoverBg" | "elevatedFocusBg" | "elevatedActiveBg" | "disabledBg" | "disabledBorder" | "tonalHoverBg" | "textButtonBg" | "elevation1" | "elevation2" | "elevationFilter" | "BackgroundOpacity008" | "BackgroundOpacity012" | "BackgroundOpacity016" | "Black" | "ErrorContainerOpacity008" | "ErrorContainerOpacity012" | "ErrorContainerOpacity016" | "ErrorOpacity008" | "ErrorOpacity012" | "ErrorOpacity016" | "InverseOnSurfaceOpacity008" | "InverseOnSurfaceOpacity012" | "InverseOnSurfaceOpacity016" | "InversePrimaryOpacity008" | "InversePrimaryOpacity012" | "InversePrimaryOpacity016" | "InverseSurfaceOpacity008" | "InverseSurfaceOpacity012" | "InverseSurfaceOpacity016" | "OnBackgroundOpacity008" | "OnBackgroundOpacity012" | "OnBackgroundOpacity016" | "OnErrorContainerOpacity008" | "OnErrorContainerOpacity012" | "OnErrorContainerOpacity016" | "OnErrorOpacity008" | "OnErrorOpacity012" | "OnErrorOpacity016" | "OnPrimaryContainerOpacity008" | "OnPrimaryContainerOpacity012" | "OnPrimaryContainerOpacity016" | "OnPrimaryOpacity008" | "OnPrimaryOpacity012" | "OnPrimaryOpacity016" | "OnSecondaryContainerOpacity008" | "OnSecondaryContainerOpacity012" | "OnSecondaryContainerOpacity016" | "OnSecondaryOpacity008" | "OnSecondaryOpacity012" | "OnSecondaryOpacity016" | "OnSurfaceOpacity008" | "OnSurfaceOpacity012" | "OnSurfaceOpacity016" | "OnSurfaceVariantOpacity008" | "OnSurfaceVariantOpacity012" | "OnSurfaceVariantOpacity016" | "OnTertiaryContainerOpacity008" | "OnTertiaryContainerOpacity012" | "OnTertiaryContainerOpacity016" | "OnTertiaryOpacity008" | "OnTertiaryOpacity012" | "OnTertiaryOpacity016" | "OutlineOpacity008" | "OutlineOpacity012" | "OutlineOpacity016" | "PrimaryContainerOpacity008" | "PrimaryContainerOpacity012" | "PrimaryContainerOpacity016" | "PrimaryOpacity008" | "PrimaryOpacity012" | "PrimaryOpacity016" | "SecondaryContainerOpacity008" | "SecondaryContainerOpacity012" | "SecondaryContainerOpacity016" | "SecondaryOpacity008" | "SecondaryOpacity012" | "SecondaryOpacity016" | "ShadowOpacity008" | "ShadowOpacity012" | "ShadowOpacity016" | "Surface10" | "Surface11" | "Surface20" | "Surface21" | "Surface30" | "Surface31" | "Surface40" | "Surface41" | "Surface50" | "Surface51" | "SurfaceOpacity008" | "SurfaceOpacity012" | "SurfaceOpacity016" | "SurfaceVariantOpacity008" | "SurfaceVariantOpacity012" | "SurfaceVariantOpacity016" | "TertiaryContainerOpacity008" | "TertiaryContainerOpacity012" | "TertiaryContainerOpacity016" | "TertiaryOpacity008" | "TertiaryOpacity012" | "TertiaryOpacity016" | "White" | "Background" | "Error" | "ErrorContainer" | "InverseOnSurface" | "InversePrimary" | "InverseSurface" | "OnBackground" | "OnError" | "OnErrorContainer" | "OnPrimary" | "OnPrimaryContainer" | "OnSecondary" | "OnSecondaryContainer" | "OnSurface" | "OnSurfaceVariant" | "OnTertiary" | "OnTertiaryContainer" | "Outline" | "Primary" | "PrimaryContainer" | "Secondary" | "SecondaryContainer" | "Shadow" | "Surface" | "SurfaceVariant" | "Tertiary" | "TertiaryContainer") => string;
    space: (args_0: number) => string;
    borderRadius: (args_0: "rounded") => string;
    common: (args_0: "shadows" | "M3Body1" | "M3Body2" | "M3BodyLarge" | "M3BodyMedium" | "M3BodySmall" | "M3Button" | "M3Caption" | "M3Display1" | "M3Display2" | "M3Display3" | "M3DisplayLarge" | "M3DisplayMedium" | "M3DisplaySmall" | "M3ExtraSmallExtraSmall0599dpLayoutRegionsOff" | "M3ExtraSmallExtraSmall0599dpLayoutRegionsOn0" | "M3ExtraSmallExtraSmall0599dpLayoutRegionsOn1" | "M3ExtraSmallExtraSmall0599dpLayoutRegionsOn2" | "M3Headline1" | "M3Headline2" | "M3Headline3" | "M3Headline4" | "M3Headline5" | "M3Headline6" | "M3HeadlineLarge" | "M3HeadlineMedium" | "M3HeadlineSmall" | "M3LabelLarge" | "M3LabelMedium" | "M3LabelSmall" | "M3Labelsmall" | "M3LargeLarge1440DpLayoutRegionsExpanded0" | "M3LargeLarge1440DpLayoutRegionsExpanded1" | "M3LargeLarge1440DpLayoutRegionsExpanded2" | "M3LargeLarge1440DpLayoutRegionsOff" | "M3LargeLarge1440DpLayoutRegionsOn0" | "M3LargeLarge1440DpLayoutRegionsOn1" | "M3LargeLarge1440DpLayoutRegionsOn2" | "M3MediumMedium12401439dpLayoutRegionsOff" | "M3MediumMedium12401439dpLayoutRegionsOn0" | "M3MediumMedium12401439dpLayoutRegionsOn1" | "M3MediumMedium12401439dpLayoutRegionsOn2" | "M3MediumMedium9051239dpLayoutRegionsOff" | "M3MediumMedium9051239dpLayoutRegionsOn0" | "M3MediumMedium9051239dpLayoutRegionsOn1" | "M3MediumMedium9051239dpLayoutRegionsOn2" | "M3Overline" | "M3RefErrorError0" | "M3RefErrorError10" | "M3RefErrorError100" | "M3RefErrorError20" | "M3RefErrorError30" | "M3RefErrorError40" | "M3RefErrorError50" | "M3RefErrorError60" | "M3RefErrorError70" | "M3RefErrorError80" | "M3RefErrorError90" | "M3RefErrorError95" | "M3RefErrorError99" | "M3RefNeutralNeutral0" | "M3RefNeutralNeutral10" | "M3RefNeutralNeutral100" | "M3RefNeutralNeutral20" | "M3RefNeutralNeutral30" | "M3RefNeutralNeutral40" | "M3RefNeutralNeutral50" | "M3RefNeutralNeutral60" | "M3RefNeutralNeutral70" | "M3RefNeutralNeutral80" | "M3RefNeutralNeutral90" | "M3RefNeutralNeutral95" | "M3RefNeutralNeutral99" | "M3RefNeutralVariantNeutralVariant0" | "M3RefNeutralVariantNeutralVariant10" | "M3RefNeutralVariantNeutralVariant100" | "M3RefNeutralVariantNeutralVariant20" | "M3RefNeutralVariantNeutralVariant30" | "M3RefNeutralVariantNeutralVariant40" | "M3RefNeutralVariantNeutralVariant50" | "M3RefNeutralVariantNeutralVariant60" | "M3RefNeutralVariantNeutralVariant70" | "M3RefNeutralVariantNeutralVariant80" | "M3RefNeutralVariantNeutralVariant90" | "M3RefNeutralVariantNeutralVariant95" | "M3RefNeutralVariantNeutralVariant99" | "M3RefPrimaryPrimary0" | "M3RefPrimaryPrimary10" | "M3RefPrimaryPrimary100" | "M3RefPrimaryPrimary20" | "M3RefPrimaryPrimary30" | "M3RefPrimaryPrimary40" | "M3RefPrimaryPrimary50" | "M3RefPrimaryPrimary60" | "M3RefPrimaryPrimary70" | "M3RefPrimaryPrimary80" | "M3RefPrimaryPrimary90" | "M3RefPrimaryPrimary95" | "M3RefPrimaryPrimary99" | "M3RefSecondarySecondary0" | "M3RefSecondarySecondary10" | "M3RefSecondarySecondary100" | "M3RefSecondarySecondary20" | "M3RefSecondarySecondary30" | "M3RefSecondarySecondary40" | "M3RefSecondarySecondary50" | "M3RefSecondarySecondary60" | "M3RefSecondarySecondary70" | "M3RefSecondarySecondary80" | "M3RefSecondarySecondary90" | "M3RefSecondarySecondary95" | "M3RefSecondarySecondary99" | "M3RefTertiaryTertiary0" | "M3RefTertiaryTertiary10" | "M3RefTertiaryTertiary100" | "M3RefTertiaryTertiary20" | "M3RefTertiaryTertiary30" | "M3RefTertiaryTertiary40" | "M3RefTertiaryTertiary50" | "M3RefTertiaryTertiary60" | "M3RefTertiaryTertiary70" | "M3RefTertiaryTertiary80" | "M3RefTertiaryTertiary90" | "M3RefTertiaryTertiary95" | "M3RefTertiaryTertiary99" | "M3SmallSmall600904dpLayoutRegionsOff" | "M3SmallSmall600904dpLayoutRegionsOn0" | "M3SmallSmall600904dpLayoutRegionsOn1" | "M3SmallSmall600904dpLayoutRegionsOn2" | "M3SourceError" | "M3SourceNeutral" | "M3SourceNeutralVariant" | "M3SourcePrimary" | "M3SourceSecondary" | "M3SourceSeed" | "M3SourceTertiary" | "M3Subhead1" | "M3Subhead2" | "M3TitleLarge" | "M3TitleMedium" | "M3TitleSmall") => string | {
        fontSize: number;
        textDecoration: string;
        fontFamily: string;
        fontWeight: number;
        fontStyle: string;
        fontStretch: string;
        letterSpacing: number;
        lineHeight: number;
        paragraphIndent: number;
        paragraphSpacing: number;
        textCase: string;
    } | {
        fontSize: number;
        textDecoration: string;
        fontFamily: string;
        fontWeight: number;
        fontStyle: string;
        fontStretch: string;
        letterSpacing: number;
        lineHeight: number;
        paragraphIndent: number;
        paragraphSpacing: number;
        textCase: string;
    } | {
        fontSize: number;
        textDecoration: string;
        fontFamily: string;
        fontWeight: number;
        fontStyle: string;
        fontStretch: string;
        letterSpacing: number;
        lineHeight: number;
        paragraphIndent: number;
        paragraphSpacing: number;
        textCase: string;
    } | {
        fontSize: number;
        textDecoration: string;
        fontFamily: string;
        fontWeight: number;
        fontStyle: string;
        fontStretch: string;
        letterSpacing: number;
        lineHeight: number;
        paragraphIndent: number;
        paragraphSpacing: number;
        textCase: string;
    } | {
        fontSize: number;
        textDecoration: string;
        fontFamily: string;
        fontWeight: number;
        fontStyle: string;
        fontStretch: string;
        letterSpacing: number;
        lineHeight: number;
        paragraphIndent: number;
        paragraphSpacing: number;
        textCase: string;
    } | {
        fontSize: number;
        textDecoration: string;
        fontFamily: string;
        fontWeight: number;
        fontStyle: string;
        fontStretch: string;
        letterSpacing: number;
        lineHeight: number;
        paragraphIndent: number;
        paragraphSpacing: number;
        textCase: string;
    } | {
        fontSize: number;
        textDecoration: string;
        fontFamily: string;
        fontWeight: number;
        fontStyle: string;
        fontStretch: string;
        letterSpacing: number;
        lineHeight: number;
        paragraphIndent: number;
        paragraphSpacing: number;
        textCase: string;
    } | {
        fontSize: number;
        textDecoration: string;
        fontFamily: string;
        fontWeight: number;
        fontStyle: string;
        fontStretch: string;
        letterSpacing: number;
        lineHeight: number;
        paragraphIndent: number;
        paragraphSpacing: number;
        textCase: string;
    } | {
        fontSize: number;
        textDecoration: string;
        fontFamily: string;
        fontWeight: number;
        fontStyle: string;
        fontStretch: string;
        letterSpacing: number;
        lineHeight: number;
        paragraphIndent: number;
        paragraphSpacing: number;
        textCase: string;
    } | {
        fontSize: number;
        textDecoration: string;
        fontFamily: string;
        fontWeight: number;
        fontStyle: string;
        fontStretch: string;
        letterSpacing: number;
        lineHeight: number;
        paragraphIndent: number;
        paragraphSpacing: number;
        textCase: string;
    } | {
        fontSize: number;
        textDecoration: string;
        fontFamily: string;
        fontWeight: number;
        fontStyle: string;
        fontStretch: string;
        letterSpacing: number;
        lineHeight: number;
        paragraphIndent: number;
        paragraphSpacing: number;
        textCase: string;
    } | {
        fontSize: number;
        textDecoration: string;
        fontFamily: string;
        fontWeight: number;
        fontStyle: string;
        fontStretch: string;
        letterSpacing: number;
        lineHeight: number;
        paragraphIndent: number;
        paragraphSpacing: number;
        textCase: string;
    } | {
        fontSize: number;
        textDecoration: string;
        fontFamily: string;
        fontWeight: number;
        fontStyle: string;
        fontStretch: string;
        letterSpacing: number;
        lineHeight: number;
        paragraphIndent: number;
        paragraphSpacing: number;
        textCase: string;
    } | {
        pattern: string;
        gutterSize: number;
        alignment: string;
        count: number;
        offset: number;
    } | {
        pattern: string;
        gutterSize: number;
        alignment: string;
        count: number;
        offset: number;
    } | {
        pattern: string;
        sectionSize: number;
        gutterSize: number;
        alignment: string;
        count: number;
        offset: number;
    } | {
        pattern: string;
        sectionSize: number;
        gutterSize: number;
        alignment: string;
        count: number;
        offset: number;
    } | {
        fontSize: number;
        textDecoration: string;
        fontFamily: string;
        fontWeight: number;
        fontStyle: string;
        fontStretch: string;
        letterSpacing: number;
        lineHeight: number;
        paragraphIndent: number;
        paragraphSpacing: number;
        textCase: string;
    } | {
        fontSize: number;
        textDecoration: string;
        fontFamily: string;
        fontWeight: number;
        fontStyle: string;
        fontStretch: string;
        letterSpacing: number;
        lineHeight: number;
        paragraphIndent: number;
        paragraphSpacing: number;
        textCase: string;
    } | {
        fontSize: number;
        textDecoration: string;
        fontFamily: string;
        fontWeight: number;
        fontStyle: string;
        fontStretch: string;
        letterSpacing: number;
        lineHeight: number;
        paragraphIndent: number;
        paragraphSpacing: number;
        textCase: string;
    } | {
        fontSize: number;
        textDecoration: string;
        fontFamily: string;
        fontWeight: number;
        fontStyle: string;
        fontStretch: string;
        letterSpacing: number;
        lineHeight: number;
        paragraphIndent: number;
        paragraphSpacing: number;
        textCase: string;
    } | {
        fontSize: number;
        textDecoration: string;
        fontFamily: string;
        fontWeight: number;
        fontStyle: string;
        fontStretch: string;
        letterSpacing: number;
        lineHeight: number;
        paragraphIndent: number;
        paragraphSpacing: number;
        textCase: string;
    } | {
        fontSize: number;
        textDecoration: string;
        fontFamily: string;
        fontWeight: number;
        fontStyle: string;
        fontStretch: string;
        letterSpacing: number;
        lineHeight: number;
        paragraphIndent: number;
        paragraphSpacing: number;
        textCase: string;
    } | {
        fontSize: number;
        textDecoration: string;
        fontFamily: string;
        fontWeight: number;
        fontStyle: string;
        fontStretch: string;
        letterSpacing: number;
        lineHeight: number;
        paragraphIndent: number;
        paragraphSpacing: number;
        textCase: string;
    } | {
        fontSize: number;
        textDecoration: string;
        fontFamily: string;
        fontWeight: number;
        fontStyle: string;
        fontStretch: string;
        letterSpacing: number;
        lineHeight: number;
        paragraphIndent: number;
        paragraphSpacing: number;
        textCase: string;
    } | {
        fontSize: number;
        textDecoration: string;
        fontFamily: string;
        fontWeight: number;
        fontStyle: string;
        fontStretch: string;
        letterSpacing: number;
        lineHeight: number;
        paragraphIndent: number;
        paragraphSpacing: number;
        textCase: string;
    } | {
        fontSize: number;
        textDecoration: string;
        fontFamily: string;
        fontWeight: number;
        fontStyle: string;
        fontStretch: string;
        letterSpacing: number;
        lineHeight: number;
        paragraphIndent: number;
        paragraphSpacing: number;
        textCase: string;
    } | {
        fontSize: number;
        textDecoration: string;
        fontFamily: string;
        fontWeight: number;
        fontStyle: string;
        fontStretch: string;
        letterSpacing: number;
        lineHeight: number;
        paragraphIndent: number;
        paragraphSpacing: number;
        textCase: string;
    } | {
        fontSize: number;
        textDecoration: string;
        fontFamily: string;
        fontWeight: number;
        fontStyle: string;
        fontStretch: string;
        letterSpacing: number;
        lineHeight: number;
        paragraphIndent: number;
        paragraphSpacing: number;
        textCase: string;
    } | {
        fontSize: number;
        textDecoration: string;
        fontFamily: string;
        fontWeight: number;
        fontStyle: string;
        fontStretch: string;
        letterSpacing: number;
        lineHeight: number;
        paragraphIndent: number;
        paragraphSpacing: number;
        textCase: string;
    } | {
        pattern: string;
        sectionSize: number;
        gutterSize: number;
        alignment: string;
        count: number;
    } | {
        pattern: string;
        sectionSize: number;
        gutterSize: number;
        alignment: string;
        count: number;
        offset: number;
    } | {
        pattern: string;
        sectionSize: number;
        gutterSize: number;
        alignment: string;
        count: number;
        offset: number;
    } | {
        pattern: string;
        sectionSize: number;
        gutterSize: number;
        alignment: string;
        count: number;
    } | {
        pattern: string;
        sectionSize: number;
        gutterSize: number;
        alignment: string;
        count: number;
    } | {
        pattern: string;
        sectionSize: number;
        gutterSize: number;
        alignment: string;
        count: number;
        offset: number;
    } | {
        pattern: string;
        sectionSize: number;
        gutterSize: number;
        alignment: string;
        count: number;
        offset: number;
    } | {
        pattern: string;
        gutterSize: number;
        alignment: string;
        count: number;
        offset: number;
    } | {
        pattern: string;
        gutterSize: number;
        alignment: string;
        count: number;
        offset: number;
    } | {
        pattern: string;
        sectionSize: number;
        gutterSize: number;
        alignment: string;
        count: number;
        offset: number;
    } | {
        pattern: string;
        sectionSize: number;
        gutterSize: number;
        alignment: string;
        count: number;
        offset: number;
    } | {
        pattern: string;
        gutterSize: number;
        alignment: string;
        count: number;
        offset: number;
    } | {
        pattern: string;
        sectionSize: number;
        gutterSize: number;
        alignment: string;
        count: number;
        offset: number;
    } | {
        pattern: string;
        sectionSize: number;
        gutterSize: number;
        alignment: string;
        count: number;
        offset: number;
    } | {
        pattern: string;
        sectionSize: number;
        gutterSize: number;
        alignment: string;
        count: number;
        offset: number;
    } | {
        fontSize: number;
        textDecoration: string;
        fontFamily: string;
        fontWeight: number;
        fontStyle: string;
        fontStretch: string;
        letterSpacing: number;
        lineHeight: number;
        paragraphIndent: number;
        paragraphSpacing: number;
        textCase: string;
    } | {
        pattern: string;
        gutterSize: number;
        alignment: string;
        count: number;
        offset: number;
    } | {
        pattern: string;
        sectionSize: number;
        gutterSize: number;
        alignment: string;
        count: number;
        offset: number;
    } | {
        pattern: string;
        sectionSize: number;
        gutterSize: number;
        alignment: string;
        count: number;
        offset: number;
    } | {
        pattern: string;
        sectionSize: number;
        gutterSize: number;
        alignment: string;
        count: number;
        offset: number;
    } | {
        fontSize: number;
        textDecoration: string;
        fontFamily: string;
        fontWeight: number;
        fontStyle: string;
        fontStretch: string;
        letterSpacing: number;
        lineHeight: number;
        paragraphIndent: number;
        paragraphSpacing: number;
        textCase: string;
    } | {
        fontSize: number;
        textDecoration: string;
        fontFamily: string;
        fontWeight: number;
        fontStyle: string;
        fontStretch: string;
        letterSpacing: number;
        lineHeight: number;
        paragraphIndent: number;
        paragraphSpacing: number;
        textCase: string;
    } | {
        fontSize: number;
        textDecoration: string;
        fontFamily: string;
        fontWeight: number;
        fontStyle: string;
        fontStretch: string;
        letterSpacing: number;
        lineHeight: number;
        paragraphIndent: number;
        paragraphSpacing: number;
        textCase: string;
    } | {
        fontSize: number;
        textDecoration: string;
        fontFamily: string;
        fontWeight: number;
        fontStyle: string;
        fontStretch: string;
        letterSpacing: number;
        lineHeight: number;
        paragraphIndent: number;
        paragraphSpacing: number;
        textCase: string;
    } | {
        fontSize: number;
        textDecoration: string;
        fontFamily: string;
        fontWeight: number;
        fontStyle: string;
        fontStretch: string;
        letterSpacing: number;
        lineHeight: number;
        paragraphIndent: number;
        paragraphSpacing: number;
        textCase: string;
    } | {
        Elevation10: {
            shadowType: string;
            radius: number;
            color: string;
            offsetX: number;
            offsetY: number;
            spread: number;
        };
        Elevation11: {
            shadowType: string;
            radius: number;
            color: string;
            offsetX: number;
            offsetY: number;
            spread: number;
        };
        Elevation20: {
            shadowType: string;
            radius: number;
            color: string;
            offsetX: number;
            offsetY: number;
            spread: number;
        };
        Elevation21: {
            shadowType: string;
            radius: number;
            color: string;
            offsetX: number;
            offsetY: number;
            spread: number;
        };
        Elevation30: {
            shadowType: string;
            radius: number;
            color: string;
            offsetX: number;
            offsetY: number;
            spread: number;
        };
        Elevation31: {
            shadowType: string;
            radius: number;
            color: string;
            offsetX: number;
            offsetY: number;
            spread: number;
        };
        Elevation40: {
            shadowType: string;
            radius: number;
            color: string;
            offsetX: number;
            offsetY: number;
            spread: number;
        };
        Elevation41: {
            shadowType: string;
            radius: number;
            color: string;
            offsetX: number;
            offsetY: number;
            spread: number;
        };
        Elevation50: {
            shadowType: string;
            radius: number;
            color: string;
            offsetX: number;
            offsetY: number;
            spread: number;
        };
        Elevation51: {
            shadowType: string;
            radius: number;
            color: string;
            offsetX: number;
            offsetY: number;
            spread: number;
        };
    };
    setColorMode: SetColorMode;
    colorMode: string | undefined;
};
